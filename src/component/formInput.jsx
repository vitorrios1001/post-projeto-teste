import React from 'react'
//import InputMask from 'react-input-mask'
import { Tooltip, Icon,   Input,   } from 'antd'

var tooltipColor = 'rgb(201, 195, 195)'

const FormInput = ({ input, label, tooltip, note, col, required, maxLength, disabled, meta: { touched, error, warning } }) => (
    <div className={`col-md-${col}`}>
        <div className="form-group">
            <label className="control-label">
                {label}
                <span style={{ color: 'transparent' }}>.</span>
                {required &&
                    <span className="text-danger"> * </span>
                }
                {note &&
                    <label style={{ fontWeight: 'normal' }}>({note})</label>
                }
                {
                    tooltip &&
                    <Tooltip title={tooltip}>
                        <Icon type="question-circle-o" style={{ color: tooltipColor }} />
                    </Tooltip>
                }
            </label>
            <Input {...input} maxLength={maxLength} disabled={disabled} style={{ width: '100%' }} />
            <small className="help-block">
                {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span className="text-warning">{warning}</span>))} <span style={{ color: 'transparent' }}>.</span>
            </small>
        </div>
    </div>
)

// const FormInputButton = ({ input: { onChange, value, onFocus }, onKeyUp, onClick, col, mask, label, required, icon, disabled, tooltip, meta: { touched, error, warning } }) => (
//     <div className={`col-md-${col}`}>
//         <div className="form-group">
//             <label className="control-label">
//                 {label}
//                 {required &&
//                     <span className="text-danger"> * </span>
//                 }
//                 {
//                     tooltip &&
//                     <Tooltip title={tooltip}>
//                         <Icon type="question-circle-o" style={{ color: tooltipColor }} />
//                     </Tooltip>
//                 }
//             </label>
//             <div className="input-group">
//                 <InputMask value={!value ? '' : value} onChange={onChange} onFocus={onFocus} onKeyUp={onKeyUp} type="text" mask={mask} className="form-control" disabled={disabled} />
//                 <span className="input-group-btn">
//                     <button type="button" onClick={onClick} className="btn btn-primary">
//                         <i className={`fa fa-${icon}`} />
//                     </button>
//                 </span>
//             </div>
//             {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span className="text-warning">{warning}</span>))} <span style={{ color: 'transparent' }}>.</span>
//         </div>
//     </div>
// )

export {
    FormInput,
    // FormInputTextArea
}