import React from "react";

const NewBoxForm = () => {
    const INITIAL_STATE = {
        color: '',
        height: '',
        width: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addBox([...formData]);
        setFormData(INITIAL_STATE)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Box Color:</label>
            <input
            id="color"
            type="text"
            name="color"
            placeholder="Box Color"
            value={formData.color}
            onChange={handleChange}
            />
            <label htmlFor="height">Box Height: {formData.height} </label>
            <input
            id="height"
            type="range"
            min="20"
            max="700"
            value={formData.height}
            onChange={handleChange}
            />
            <label htmlFor="width">Box Width: {formData.width} </label>
            <input
            id="width"
            type="range"
            min="20"
            max="700"
            value={formData.width}
            onChange={handleChange}
            />
            <button>Add Box</button>            
        </form>
    )
}

export default NewBoxForm;