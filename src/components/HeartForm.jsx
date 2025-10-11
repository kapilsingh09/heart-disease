import React, { useState } from "react";
import { Heart, Activity, Stethoscope, Info, X } from "lucide-react";
// import predictHeart from './api'
// import predictHeart from "./api";
import predictHeart from "../api";

/**
 * InfoTooltip
 * Shows an info icon with a tooltip on hover.
 * @param {string} title - Tooltip title
 * @param {string} description - Tooltip description
 */
const InfoTooltip = ({ title, description }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative inline-block ml-2">
      <button
        type="button"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="text-blue-400 hover:text-blue-300 transition-colors"
        aria-label={`Info about ${title}`}
      >
        <Info size={16} />
      </button>
      {show && (
        <div className="absolute z-10 w-64 p-3 bg-gray-700 text-white text-sm rounded-lg shadow-xl left-6 top-0 transform -translate-y-1/4">
          <div className="font-semibold mb-1">{title}</div>
          <div className="text-gray-300">{description}</div>
        </div>
      )}
    </div>
  );
};

/**
 * HeartForm
 * Main form for heart disease prediction.
 */
const HeartForm = () => {
  // About section visibility
  const [showAbout, setShowAbout] = useState(true);

  // Form state
  const [formData, setFormData] = useState({
    Age: 50,
    Sex: "M",
    ChestPainType: "ATA",
    RestingBP: 120,
    Cholesterol: 200,
    FastingBS: 0,
    RestingECG: "Normal",
    MaxHR: 150,
    ExerciseAngina: "N",
    Oldpeak: 1.0,
    ST_Slope: "Up",
  });

  // Prediction result and loading state
  const [prediction, setPrediction] = useState("");
  const [loading, setLoading] = useState(false);

  /**
   * handleChange
   * Handles input changes for form fields.
   * @param {string} field - Field name
   */
  const handleChange = (field) => (e) => {
    // For number inputs, ensure value is a number
    const value =
      e.target.type === "number" || typeof formData[field] === "number"
        ? Number(e.target.value)
        : e.target.value;
    setFormData({ ...formData, [field]: value });
  };

  /**
   * handleSubmit
   * Handles form submission and prediction.
   * Shows a 1 second delay for "Analyzing..." state.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setPrediction(""); // Clear previous prediction
    setLoading(true);
    try {
      // Wait 1 second to show "Analyzing..." spinner
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Call the prediction API
      const result = await predictHeart(formData);
      setPrediction(result);
    } catch (error) {
      setPrediction("Error: Unable to get prediction. Please try again.",error);
    }
    setLoading(false);
  };

  // Field info for tooltips
  const fieldInfo = {
    Age: "Patient's age in years. Risk increases with age.",
    Sex: "Biological sex. M = Male, F = Female",
    ChestPainType:
      "Type of chest pain experienced. ATA = Atypical Angina, NAP = Non-Anginal Pain, TA = Typical Angina, ASY = Asymptomatic",
    RestingBP: "Resting blood pressure in mm Hg. Normal is around 120/80.",
    Cholesterol: "Serum cholesterol in mg/dL. Normal is below 200.",
    FastingBS: "Fasting blood sugar > 120 mg/dL. 0 = No, 1 = Yes",
    RestingECG:
      "Resting electrocardiogram results. Normal, ST = ST-T wave abnormality, LVH = Left ventricular hypertrophy",
    MaxHR: "Maximum heart rate achieved during exercise. Normal max HR ≈ 220 - age",
    ExerciseAngina: "Exercise induced angina (chest pain). Y = Yes, N = No",
    Oldpeak: "ST depression induced by exercise relative to rest. Measures heart strain.",
    ST_Slope:
      "Slope of peak exercise ST segment. Up = Upsloping, Flat = Flat, Down = Downsloping",
  };

  return (
    <div className="min-h-screen  py-6 px-2 sm:px-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {/* Header */}
        <div className="text-center mb-4">
          <div className="flex items-center justify-center mb-3">
            <Heart className="text-red-400 mr-3" size={40} />
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Heart Disease Prediction
            </h1>
          </div>
          <p className="text-gray-300 text-base sm:text-lg">
            Enter patient information to assess heart disease risk
          </p>
        </div>

        {/* Main Form Card */}
        <div className=" max-w-7xl  w-full bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Age */}
              <div>
                <label className="flex items-center text-white font-medium mb-2">
                  Age
                  <InfoTooltip title="Age" description={fieldInfo.Age} />
                </label>
                <input
                  type="number"
                  value={formData.Age}
                  onChange={handleChange("Age")}
                  className="w-full bg-white/20 border border-white/30 p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  min="18"
                  max="100"
                  required
                />
              </div>

              {/* Sex */}
              <div>
                <label className="flex items-center text-white font-medium mb-2">
                  Sex
                  <InfoTooltip title="Sex" description={fieldInfo.Sex} />
                </label>
                <select
                  value={formData.Sex}
                  onChange={handleChange("Sex")}
                  className="w-full bg-white/20 border border-white/30 p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  required
                >
                  <option value="M" className="bg-gray-800">
                    Male
                  </option>
                  <option value="F" className="bg-gray-800">
                    Female
                  </option>
                </select>
              </div>

              {/* Chest Pain Type */}
              <div>
                <label className="flex items-center text-white font-medium mb-2">
                  Chest Pain Type
                  <InfoTooltip
                    title="Chest Pain Type"
                    description={fieldInfo.ChestPainType}
                  />
                </label>
                <select
                  value={formData.ChestPainType}
                  onChange={handleChange("ChestPainType")}
                  className="w-full bg-white/20 border border-white/30 p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  required
                >
                  <option value="ATA" className="bg-gray-800">
                    Atypical Angina
                  </option>
                  <option value="NAP" className="bg-gray-800">
                    Non-Anginal Pain
                  </option>
                  <option value="TA" className="bg-gray-800">
                    Typical Angina
                  </option>
                  <option value="ASY" className="bg-gray-800">
                    Asymptomatic
                  </option>
                </select>
              </div>

              {/* Resting BP */}
              <div>
                <label className="flex items-center text-white font-medium mb-2">
                  Resting BP (mm Hg)
                  <InfoTooltip
                    title="Resting Blood Pressure"
                    description={fieldInfo.RestingBP}
                  />
                </label>
                <input
                  type="number"
                  value={formData.RestingBP}
                  onChange={handleChange("RestingBP")}
                  className="w-full bg-white/20 border border-white/30 p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  min="80"
                  max="200"
                  required
                />
              </div>

              {/* Cholesterol */}
              <div>
                <label className="flex items-center text-white font-medium mb-2">
                  Cholesterol (mg/dL)
                  <InfoTooltip
                    title="Cholesterol"
                    description={fieldInfo.Cholesterol}
                  />
                </label>
                <input
                  type="number"
                  value={formData.Cholesterol}
                  onChange={handleChange("Cholesterol")}
                  className="w-full bg-white/20 border border-white/30 p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  min="100"
                  max="600"
                  required
                />
              </div>

              {/* Fasting BS */}
              <div>
                <label className="flex items-center text-white font-medium mb-2">
                  Fasting BS {">"} 120 mg/dL
                  <InfoTooltip
                    title="Fasting Blood Sugar"
                    description={fieldInfo.FastingBS}
                  />
                </label>
                <select
                  value={formData.FastingBS}
                  onChange={handleChange("FastingBS")}
                  className="w-full bg-white/20 border border-white/30 p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  required
                >
                  <option value={0} className="bg-gray-800">
                    No (0)
                  </option>
                  <option value={1} className="bg-gray-800">
                    Yes (1)
                  </option>
                </select>
              </div>

              {/* Resting ECG */}
              <div>
                <label className="flex items-center text-white font-medium mb-2">
                  Resting ECG
                  <InfoTooltip
                    title="Resting ECG"
                    description={fieldInfo.RestingECG}
                  />
                </label>
                <select
                  value={formData.RestingECG}
                  onChange={handleChange("RestingECG")}
                  className="w-full bg-white/20 border border-white/30 p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  required
                >
                  <option value="Normal" className="bg-gray-800">
                    Normal
                  </option>
                  <option value="ST" className="bg-gray-800">
                    ST-T Wave Abnormality
                  </option>
                  <option value="LVH" className="bg-gray-800">
                    Left Ventricular Hypertrophy
                  </option>
                </select>
              </div>

              {/* Max HR */}
              <div>
                <label className="flex items-center text-white font-medium mb-2">
                  Max Heart Rate
                  <InfoTooltip
                    title="Maximum Heart Rate"
                    description={fieldInfo.MaxHR}
                  />
                </label>
                <input
                  type="number"
                  value={formData.MaxHR}
                  onChange={handleChange("MaxHR")}
                  className="w-full bg-white/20 border border-white/30 p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  min="60"
                  max="220"
                  required
                />
              </div>

              {/* Exercise Angina */}
              <div>
                <label className="flex items-center text-white font-medium mb-2">
                  Exercise Angina
                  <InfoTooltip
                    title="Exercise Angina"
                    description={fieldInfo.ExerciseAngina}
                  />
                </label>
                <select
                  value={formData.ExerciseAngina}
                  onChange={handleChange("ExerciseAngina")}
                  className="w-full bg-white/20 border border-white/30 p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  required
                >
                  <option value="Y" className="bg-gray-800">
                    Yes
                  </option>
                  <option value="N" className="bg-gray-800">
                    No
                  </option>
                </select>
              </div>

              {/* Oldpeak */}
              <div>
                <label className="flex items-center text-white font-medium mb-2">
                  Oldpeak
                  <InfoTooltip
                    title="Oldpeak"
                    description={fieldInfo.Oldpeak}
                  />
                </label>
                <input
                  type="number"
                  value={formData.Oldpeak}
                  onChange={handleChange("Oldpeak")}
                  className="w-full bg-white/20 border border-white/30 p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  step="0.1"
                  min="0"
                  max="6"
                  required
                />
              </div>

              {/* ST Slope */}
              <div>
                <label className="flex items-center text-white font-medium mb-2">
                  ST Slope
                  <InfoTooltip
                    title="ST Slope"
                    description={fieldInfo.ST_Slope}
                  />
                </label>
                <select
                  value={formData.ST_Slope}
                  onChange={handleChange("ST_Slope")}
                  className="w-full bg-white/20 border border-white/30 p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  required
                >
                  <option value="Up" className="bg-gray-800">
                    Upsloping
                  </option>
                  <option value="Flat" className="bg-gray-800">
                    Flat
                  </option>
                  <option value="Down" className="bg-gray-800">
                    Downsloping
                  </option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white p-4 rounded-lg font-semibold text-lg transform hover:scale-101  hover:cursor-pointer transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-3"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Analyzing...
                </span>
              ) : (
                "Predict Heart Disease Risk"
              )}
            </button>
          </form>

          {/* Prediction Result */}
          {prediction && (
            <div
              className={`mt-6 p-6 text-center font-bold text-lg rounded-xl shadow-lg transform transition-all duration-500 ${
                prediction.includes("Low")
                  ? "bg-green-500/30 border-2 border-green-400 text-green-100"
                  : prediction.startsWith("Error")
                  ? "bg-yellow-500/30 border-2 border-yellow-400 text-yellow-100"
                  : "bg-red-500/30 border-2 border-red-400 text-red-100"
              }`}
            >
              <div className="flex items-center justify-center mb-2">
                {prediction.includes("Low") ? (
                  <Heart className="mr-2 text-green-300" size={28} />
                ) : prediction.startsWith("Error") ? (
                  <Info className="mr-2 text-yellow-300" size={28} />
                ) : (
                  <Activity className="mr-2 text-red-300" size={28} />
                )}
              </div>
              {prediction}
            </div>
          )}
        </div>

        {/* About Section - always at the bottom, can be closed */}
        {showAbout && (
          <div className="w-full bg-white/10 mt-4 backdrop-blur-lg rounded-2xl p-4 sm:p-6 text-white shadow-2xl relative max-w-3xl mx-auto">
            {/* Close Button */}
            <button
              onClick={() => setShowAbout(false)}
              className="absolute top-4 right-4 text-white hover:text-red-400"
              aria-label="Close About Section"
            >
              <X size={20} />
            </button>
            <div className="flex items-center mb-4">
              <Stethoscope className="mr-2 text-blue-400" size={24} />
              <h3 className="text-xl font-semibold">About This Tool</h3>
            </div>
            <div className="space-y-3 text-sm text-gray-300">
              <p>
                This prediction tool uses machine learning to assess the risk of
                heart disease based on clinical parameters.
              </p>
              <p className="text-yellow-300 font-semibold">
                ⚠️ Disclaimer: This is for educational purposes only. Always
                consult a healthcare professional for medical advice.
              </p>
            </div>
          </div>
        )}
        {!showAbout && (
          <button
            onClick={() => setShowAbout(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-600 max-w-xs mx-auto"
          >
            Show About
          </button>
        )}
      </div>
    </div>
  );
};

export default HeartForm;