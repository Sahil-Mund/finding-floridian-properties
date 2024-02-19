import { PropertiesContext } from "providers/PropertiesProvider";
import { useContext, useState } from "react";

export const useProperty = () => {
    return useContext(PropertiesContext);
};


export const usePropertiesProvider = () => {
    const [properties, setProperties] = useState([]);
    const [selectedProperty, setSelectedProperty] = useState({});

    const updateProperties = (data: any) => {
        setProperties(data)
    }
    const modifySelectedProperty = (data: any) => {
        setSelectedProperty(data)
    }

    return { properties, updateProperties , selectedProperty, modifySelectedProperty };

};

