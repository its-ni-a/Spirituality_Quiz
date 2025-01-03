from flask import Flask, request, jsonify
import pandas as pd

app = Flask(__name__)

# Load questions from Excel file
def load_questions():
    df = pd.read_excel('questions.xlsx', sheet_name='Questions')
    questions = []
    for _, row in df.iterrows():
        question = {
            "id": row['id'],
            "question": row['question'],
            "options": row['options'].split(', '),  # Split options by comma
            "scores": list(map(int, row['scores'].split(', '))),  # Convert scores to integers
            "terminate": row['terminate']
        }
        questions.append(question)
    return questions

questions = load_questions()
user_scores = []

@app.route('/question/<int:question_id>', methods=['GET'])
def get_question(question_id):
    """Fetch a question by its ID."""
    question = next((q for q in questions if q["id"] == question_id), None)
    if question is None:
        return jsonify({"error": "Question not found"}), 404
    return jsonify({"question": question})

@app.route('/question/<int:question_id>', methods=['POST'])
def handle_answer(question_id):
    """Handle user's answer to a question."""
    global user_scores

    question = next((q for q in questions if q["id"] == question_id), None)
    if not question:
        return jsonify({"error": "Question not found"}), 404

    user_answer = request.json.get("answer")
    if user_answer is None or not (0 <= user_answer < len(question["options"])):
        return jsonify({"error": "Invalid answer index"}), 400

    score = question["scores"][user_answer]
    username = request.json.get("username")  # Get username from request
    user_scores.append({"username": username, "score": score})

    # Save scores to Excel
    save_scores_to_excel()

    # Check if we should terminate the quiz
    if question["terminate"] and user_answer == 1:  # Example termination condition
        return jsonify({
            "message": "I don't even know why you bothered. Goodbye.",
            "score": score,
            "final": True
        })

    next_question_id = question_id + 1
    next_question = next((q for q in questions if q["id"] == next_question_id), None)

    if next_question:
        return jsonify({"question": next_question})
    else:
        return jsonify({"message": "Quiz completed!", "final": True})

def save_scores_to_excel():
    """Save user scores to an Excel file."""
    df = pd.DataFrame(user_scores)
    df.to_excel('scores.xlsx', index=False)

if __name__ == '__main__':
    app.run(debug=True)