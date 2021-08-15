import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";

import reducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, loggerMiddleware),
});
