import { createSlice } from "@reduxjs/toolkit";

let fetchBookSlice = createSlice({
    name: "bootStock",
    initialState: {
        bookdetails: [],
        bookRecords: [],
        purchaseRecord: [],
        salesRecord:[]
    },
    reducers: {
        addInitialBook: (state, action) => {
            state.bookRecords = action.payload;
        },
        addInitialBookDetails: (state, action) => {
            state.bookdetails = action.payload;
        },
        addNewBooksDetails: (state, action) => {
            let name = action.payload.name;
            let publication = action.payload.publication;
            let className = action.payload.class;
            let PurchasePrice = action.payload.PurchasePrice;
            let SalesPrice = action.payload.SalesPrice;

            let findMatchIndex = state.bookdetails.findIndex((item) => {
                let indexFound =
                    item.name == name &&
                    item.publication == publication &&
                    item.class == className &&
                    item.PurchasePrice == PurchasePrice &&
                    item.SalesPrice == SalesPrice;
                return indexFound;
            });

            if (findMatchIndex >= 0) {
                alert("Items already added");
            } else {
                state.bookdetails.push(action.payload);
            }
        },

        addNewStock: (state, action) => {
            let itemName = action.payload.name;
            let itemPublication = action.payload.publication;
            let itemClass = action.payload.class;
            let itemUnit = action.payload.TotalUnit;

            let findIndexinBookDetails = state.bookdetails.findIndex((item) => {
                return item.name === itemName && item.publication === itemPublication && item.class === itemClass;
            });

            if (findIndexinBookDetails >= 0) {
                let sendData = {
                    name: itemName,
                    publication: itemPublication,
                    class: itemClass,
                    PurchasePrice: state.bookdetails[findIndexinBookDetails].PurchasePrice,
                    SalesPrice: state.bookdetails[findIndexinBookDetails].SalesPrice,
                    TotalUnit: itemUnit,
                };

                let findIndexinBookRecords = state.bookRecords.findIndex((item) => {
                    return item.name === itemName && item.publication === itemPublication && item.class === itemClass;
                });

                if (findIndexinBookRecords >= 0) {
                    state.bookRecords[findIndexinBookRecords].TotalUnit += itemUnit;
                } else {
                    state.bookRecords.push({ ...sendData });
                }

                // Only push the relevant information to purchaseRecord
                state.purchaseRecord.push({ ...sendData });
            } else {
                alert("Book not found in item records. Please add details first.");
            }
        }, 
    
    afterSalesStock:(state,action)=>{

        let itemName = action.payload.name;
    let itemPublication = action.payload.publication;
    let itemClass = action.payload.class;
    let soldUnits = action.payload.TotalUnit;

    let findIndexInBookDetails = state.bookdetails.findIndex((item) => {
        return item.name === itemName && item.publication === itemPublication && item.class === itemClass;
    });

    if (findIndexInBookDetails >= 0) {
        let findIndexInBookRecords = state.bookRecords.findIndex((item) => {
            return item.name === itemName && item.publication === itemPublication && item.class === itemClass;
        });

        if (findIndexInBookRecords >= 0) {
            // Update bookRecords first
            state.bookRecords[findIndexInBookRecords].TotalUnit -= soldUnits;

            // Check if there are enough units to sell
            if (state.bookRecords[findIndexInBookRecords].TotalUnit >= 0) {
                // Update salesRecord
                state.salesRecord.push({
                    name: itemName,
                    publication: itemPublication,
                    class: itemClass,
                    SoldUnits: soldUnits,
                    SalesPrice: state.bookdetails[findIndexInBookDetails].SalesPrice,
                });
            } else {
                // Rollback the stock update if there are not enough units
                state.bookRecords[findIndexInBookRecords].TotalUnit += soldUnits;
                alert("Insufficient stock for sale");
            }
        } else {
            alert("Book not found in item records. Please add details first.");

        }
    } else {
        alert("Book not found in item details. Please add details first.");
    
    }


    }
    },
});

export let fetchBookAction = fetchBookSlice.actions;
export default fetchBookSlice;















