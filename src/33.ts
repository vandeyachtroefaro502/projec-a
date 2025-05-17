import { cloneDeep } from "lodash";

// Function to perform a deep copy of an array or object
function cloneDeep(obj: any): any {
    if (Array.isArray(obj)) {
        return [...cloneDeep(obj)];
    }
    return Object.assign({}, obj);
}

// Example usage:
const data = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];

const clonedData = cloneDeep(data);

console.log(clonedData);
