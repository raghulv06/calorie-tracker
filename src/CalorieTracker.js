import React, { useState } from "react";

function CalorieTracker() {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [breakfast, setBreakfast] = useState("");
  const [lunch, setLunch] = useState("");
  const [dinner, setDinner] = useState("");
  const [snacks, setSnacks] = useState("");
  const [total, setTotal] = useState(null);
  const [remaining, setRemaining] = useState(null);

  const handleCalculate = () => {
    if (
      !name ||
      !goal ||
      !breakfast ||
      !lunch ||
      !dinner ||
      !snacks ||
      goal <= 0 ||
      breakfast < 0 ||
      lunch < 0 ||
      dinner < 0 ||
      snacks < 0
    ) {
      alert("⚠️ Please fill all fields with positive numbers!");
      return;
    }

    const totalCalories =
      Number(breakfast) + Number(lunch) + Number(dinner) + Number(snacks);
    const remainingCalories = Number(goal) - totalCalories;

    setTotal(totalCalories);
    setRemaining(remainingCalories);
  };

  return (
    <div className="tracker-card">
      <div className="form">
        <input
          type="text"
          placeholder="👤 Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="🎯 Daily Calorie Goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <input
          type="number"
          placeholder="🍳 Breakfast Calories"
          value={breakfast}
          onChange={(e) => setBreakfast(e.target.value)}
        />
        <input
          type="number"
          placeholder="🍛 Lunch Calories"
          value={lunch}
          onChange={(e) => setLunch(e.target.value)}
        />
        <input
          type="number"
          placeholder="🍲 Dinner Calories"
          value={dinner}
          onChange={(e) => setDinner(e.target.value)}
        />
        <input
          type="number"
          placeholder="🍪 Snacks Calories"
          value={snacks}
          onChange={(e) => setSnacks(e.target.value)}
        />

        <button onClick={handleCalculate}>🔥 Calculate Calories</button>
      </div>

      {total !== null && (
        <div className="result">
          <h3>📊 Summary</h3>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Daily Goal:</strong> {goal} kcal</p>
          <p><strong>Total Consumed:</strong> {total} kcal</p>
          <p>
            <strong>Remaining Calories:</strong>{" "}
            <span
              className={remaining < 0 ? "warning" : "success"}
            >
              {remaining} kcal —{" "}
              {remaining < 0
                ? "⚠️ You exceeded your goal!"
                : "✅ You are within your goal!"}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default CalorieTracker;
