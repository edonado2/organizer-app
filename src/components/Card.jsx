import React from "react";
import checkmark from "../assets/check-mark-1.svg";

export const Card = ({ 
  children, 
  title, 
  task, 
  reminder, 
  icon = checkmark,
  className = "",
  type = "standard" // Can be "standard", "task", "reminder", or "widget"
}) => {
  // Define base styles based on card type
  const getCardStyles = () => {
    const baseStyles = "flex flex-col rounded-lg shadow-sm transition-all duration-200 overflow-hidden";
    
    switch (type) {
      case "task":
        return `${baseStyles} border-l-4 bg-white text-slate-800`;
      case "reminder":
        return `${baseStyles} border-l-4 border-emerald-500 bg-white text-slate-800`;
      case "widget":
        return `${baseStyles} bg-white text-slate-800 border border-slate-200`;
      default:
        return `${baseStyles} bg-white text-slate-800 border border-slate-100`;
    }
  };

  return (
    <div className={`${getCardStyles()} ${className}`}>
      <div className="p-5">
        {/* Header with icon and title */}
        <div className="flex items-center mb-3">
          {icon && (
            <div className="mr-3 flex-shrink-0">
              <img className="w-6 h-6" src={icon} alt="icon" />
            </div>
          )}
          {title && (
            <h3 className="font-semibold text-lg text-slate-800 flex-grow">{title}</h3>
          )}
          {type === "task" && (
            <div className="ml-auto">
              <button className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </button>
            </div>
          )}
        </div>
        
        {/* Content area */}
        <div className="text-slate-600">
          {task && (
            <div className="flex items-start mb-2">
              {type === "task" && (
                <div className="mr-3 mt-0.5">
                  <div className="w-5 h-5 border-2 border-slate-300 rounded-full hover:border-emerald-500 cursor-pointer transition-colors"></div>
                </div>
              )}
              <p className="font-medium">{task}</p>
            </div>
          )}
          
          {reminder && (
            <div className="flex items-center mt-2">
              <div className="mr-2 text-emerald-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm text-slate-500">{reminder}</span>
            </div>
          )}
          
          {children && (
            <div className="mt-2">
              {children}
            </div>
          )}
        </div>
      </div>
      
      {/* Optional footer */}
      {(type === "standard" || type === "task") && (
        <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Today
          </div>
          
          {type === "task" && (
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1"></span>
              <span>Priority</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};