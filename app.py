from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/generate-meal-plan', methods=['POST'])
def generate_meal_plan():
    #Receive user preference and requirements from frontend 
    data = request.json

    # Dummy response for now
    meal_plan = {
        "breakfast": "Oatmeal",
        "lunch": "Quinoa Salad",
        "dinner": "Vegetable Stir Fry"
    }

    return jsonify(meal_plan)

if __name__ == '__main__':
    app.run(debug=True)