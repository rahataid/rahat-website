import React from "react";
// import { Controller, useFormContext } from "react-hook-form";

// export default function InputFeild({ name }) {
//     const { control } = useFormContext();

//     return (
//         <Controller
//             render={({ field }) => (
//                 <input
//                     {...field}
//                     // fullWidth
//                     // type={type}
//                     // value={field.value === 0 ? "" : field.value}
//                     // onChange={(event) => {
//                     //     if (type === "number") {
//                     //         field.onChange(Number(event.target.value));
//                     //     } else {
//                     //         field.onChange(event.target.value);
//                     //     }
//                     // }}
//                 />
//             )}
//             name={name}
//             control={control}
//             // defaultValue=""
//         />
//     );
// }
import { Controller, useFormContext } from "react-hook-form";

export default function RHFTextField({
    name,
    helperText,
    type = "text",
    allowZeroStart = false,
    label,
    ...other
}) {
    const { control } = useFormContext();

    return (
        <>
            {label && <span>{label}</span>}
            <Controller
                name={name}
                control={control}
                render={({ field, fieldState: { error } }) => {
                    const commonProps = {
                        ...field,
                        value:
                            allowZeroStart && field.value === 0
                                ? ""
                                : field.value,
                        onChange: (event) => {
                            if (type === "number") {
                                field.onChange(Number(event.target.value));
                            } else {
                                field.onChange(event.target.value);
                            }
                        },
                        style: {
                            border: "2px solid #949494",
                            borderRadius: "5px",
                            padding: "5px",
                        },
                        ...other,
                    };

                    return type === "text" || type === "number" ? (
                        <input {...commonProps} />
                    ) : (
                        <textarea {...commonProps} />
                    );
                }}
            />
        </>
    );
}

