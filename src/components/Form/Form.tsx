import { useState } from "react";
import styles from "./Form.module.css";
import { Step1 } from "../Step1/Step1";
import { Step2 } from "../Step2/Step2";
import { Step3 } from "../Step3/Step3";
import { Step4 } from "../Step4/Step4";

interface FormData {
  name: string;
  email: string;
  phone: string;
  selectedPlan: {
    arcade: {
      name: string,
      monthlyPrice: number,
      annualPrice: number;
      selected: boolean
    },
    advanced: {
      name: string,
      monthlyPrice: number,
      annualPrice: number;
      selected: boolean
    },
    pro: {
      name: string,
      monthlyPrice: number,
      annualPrice: number;
      selected: boolean
    }
  }
  subscriptionType: "Monthly" | "Annual";
  addons: {
    onlineService: {
      name: string,
      monthlyPrice: number,
      annualPrice: number,
      selected: boolean
    },
    largerStorage: {
      name: string,
      monthlyPrice: number,
      annualPrice: number,
      selected: boolean
    },
    customizableProfile: {
      name: string,
      monthlyPrice: number,
      annualPrice: number,
      selected: boolean
    }
  };
}

export const Form = () => {

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    selectedPlan: {
      arcade: {
        name: "Arcade",
        monthlyPrice: 9,
        annualPrice: 90,
        selected: true
      },
      advanced: {
        name: "Advanced",
        monthlyPrice: 12,
        annualPrice: 120,
        selected: false
      },
      pro: {
        name: "Pro",
        monthlyPrice: 15,
        annualPrice: 150,
        selected: false
      }
    },
    subscriptionType: "Monthly",
    addons: {
      onlineService: {
        name: "Online Service",
        monthlyPrice: 1,
        annualPrice: 10,
        selected: false
      },
      largerStorage: {
        name: "Larger Storage",
        monthlyPrice: 2,
        annualPrice: 20,
        selected: false
      },
      customizableProfile: {
        name: "Customizable Profile",
        monthlyPrice: 2,
        annualPrice: 20,
        selected: false
      },
    },
  });



  const [step, setStep] = useState<number>(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />;
      case 2:
        return <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <Step3 formData={formData} setFormData={setFormData} prevStep={prevStep} nextStep={nextStep} />;
      case 4:
        return <Step4 formData={formData} setFormData={setFormData} prevStep={prevStep} nextStep={nextStep} setStep={setStep} />;


      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.sideBar}>

        {/* STEP 1 */}
        <div className={styles.divContainer}>
          <div className={`${styles.step} ${step === 1 ? "bg-cyan-300 text-black" : null}`}>
            1
          </div>
          <div className={styles.stepInfo}>
            <p className="text-xs font-light text-gray-300">STEP 1</p>
            <p className="text-xs font-extrabold">YOUR INFO</p>
          </div>
        </div>

        {/* STEP 2 */}
        <div className={styles.divContainer}>
          <div className={`${styles.step} ${step === 2 ? "bg-cyan-300 text-black" : null}`}>
            2
          </div>
          <div className={styles.stepInfo}>
            <p className="text-xs font-light text-gray-300">STEP 2</p>
            <p className="text-xs font-extrabold">SELECT PLAN</p>
          </div>
        </div>

        {/* STEP 3 */}
        <div className={styles.divContainer}>
          <div className={`${styles.step} ${step === 3 ? "bg-cyan-300 text-black" : null}`}>
            3
          </div>
          <div className={styles.stepInfo}>
            <p className="text-xs font-light text-gray-300">STEP 3</p>
            <p className="text-xs font-extrabold">ADD-ONS</p>
          </div>
        </div>

        {/* STEP 4 */}
        <div className={styles.divContainer}>
          <div className={`${styles.step} ${step === 4 ? "bg-cyan-300 text-black" : null}`}>
            4
          </div>
          <div className={styles.stepInfo}>
            <p className="text-xs font-light text-gray-300">STEP 4</p>
            <p className="text-xs font-extrabold">SUMMARY</p>
          </div>
        </div>
      </div>

      {/* RENDER FORM */}
      <div className={styles.divForm}>
        {renderStep()}
      </div>
    </div>
  )
}