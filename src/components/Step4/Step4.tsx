import styles from "./Step4.module.css"

interface Step4Props {
    formData: {
        name: string;
        email: string;
        phone: string;
        selectedPlan: {
            arcade: {
                name: string;
                monthlyPrice: number;
                annualPrice: number;
                selected: boolean;
            },
            advanced: {
                name: string;
                monthlyPrice: number;
                annualPrice: number;
                selected: boolean;
            },
            pro: {
                name: string;
                monthlyPrice: number;
                annualPrice: number;
                selected: boolean;
            },
        },
        subscriptionType: "Monthly" | "Annual";
        addons: {
            onlineService: {
                name: string;
                monthlyPrice: number;
                annualPrice: number;
                selected: boolean;
            },
            largerStorage: {
                name: string;
                monthlyPrice: number;
                annualPrice: number;
                selected: boolean;
            },
            customizableProfile: {
                name: string;
                monthlyPrice: number;
                annualPrice: number;
                selected: boolean;
            };
        };
    };
    setFormData: React.Dispatch<
        React.SetStateAction<{
            name: string;
            email: string;
            phone: string;
            selectedPlan: {
                arcade: {
                    name: string;
                    monthlyPrice: number;
                    annualPrice: number;
                    selected: boolean;
                };
                advanced: {
                    name: string;
                    monthlyPrice: number;
                    annualPrice: number;
                    selected: boolean;
                };
                pro: {
                    name: string;
                    monthlyPrice: number;
                    annualPrice: number;
                    selected: boolean;
                };
            };
            subscriptionType: "Monthly" | "Annual";
            addons: {
                onlineService: {
                    name: string;
                    monthlyPrice: number;
                    annualPrice: number;
                    selected: boolean;
                };
                largerStorage: {
                    name: string;
                    monthlyPrice: number;
                    annualPrice: number;
                    selected: boolean;
                };
                customizableProfile: {
                    name: string;
                    monthlyPrice: number;
                    annualPrice: number;
                    selected: boolean;
                };
            };
        }>
    >;
    nextStep: () => void;
    prevStep: () => void;
    setStep: React.Dispatch<React.SetStateAction<number>>
}

export const Step4: React.FC<Step4Props> = ({ formData, setFormData, prevStep, nextStep, setStep }) => {

    // CAMBIAR EL PLAN
    const handlePlanChange = () => {
        setStep(2)
    };

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <h2 className={styles.title}>Finishing up</h2>
                <p className={styles.titleDesc}>
                    Double-check everything looks OK before confirming.
                </p>
            </div>

            {/* SUMMARY */}
            <div className={styles.summary}>
                <div className={styles.sumContainer}>
                    <div className={styles.divUp}>
                        <div className="w-40 h-full pt-2 pl-4">

                            {/* PLAN AND SUBSCRIPTION */}
                            <p className="text-blue-950 text-sm font-extrabold text-left">{Object.values(formData.selectedPlan).find((plan) => plan.selected)?.name} (
                                {formData.subscriptionType === "Monthly" ? "Monthly" : "Annual"})
                            </p>

                            {/* CHANGE PLAN */}
                            <p onClick={handlePlanChange} className="cursor-pointer text-xs text-gray-700 text-left underline">
                                Change
                            </p>
                        </div>
                        <div className="w-20 h-full flex align-middle justify-center pt-4">
                            <p className="text-blue-950 text-sm font-extrabold text-center">
                                ${formData.subscriptionType === "Monthly"
                                    ? Object.values(formData.selectedPlan).find((plan) => plan.selected)?.monthlyPrice + "/mo"
                                    :
                                    Object.values(formData.selectedPlan).find((plan) => plan.selected)?.annualPrice + "/yr"
                                }
                            </p>
                        </div>
                    </div>

                    {/* LINE BETWEEN */}
                    <div className="border w-80 h-0 border-gray-200"></div>


                    <div className={styles.divDown}>
                        {Object.entries(formData.addons).map(([addonName, addon]) => (
                            addon.selected && (
                                <div key={addonName} className="flex justify-between items-center pl-4">

                                    <p className="text-xs font-thin text-gray-700">
                                        {addon.name}
                                    </p>
                                    <p className="text-xs font-normal text-blue-950 pr-5">
                                        +${formData.subscriptionType === "Monthly"
                                            ? addon.monthlyPrice + "/mo"
                                            : addon.annualPrice + "/yr"}
                                    </p>
                                </div>
                            )
                        ))}
                    </div>
                </div>
                <div className={styles.total}>

                </div>
            </div>

            {/* NEXT AND BACK BUTTONS */}
            <div className={styles.divButtons}>
                <p className={styles.back} onClick={prevStep}>
                    Go Back
                </p>
                <button className={styles.nextButton} onClick={nextStep}>
                    Next Step
                </button>
            </div>
        </div>
    );
}
