import availableComputerImage from '../assets/pc-green.svg'
import reservedComputerImage from '../assets/pc-red.svg'

export const COMPUTER_STATE = {
    false: availableComputerImage,
    true: reservedComputerImage
}

// Data fetch
export const json = {
    "computers": [
        {
            "id": "HP-",
            "room": 201,
            "reserved": null,
            "features": {
                "brand": "HP",
                "model": "Pavilion 15",
                "processor": "Intel Core i5",
                "ram": "8GB",
                "storage": "256GB SSD"
            }
        }
    ]
}