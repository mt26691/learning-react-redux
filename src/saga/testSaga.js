import { delay } from 'redux-saga/effects';

export function* testSaga() {
    yield delay(1000);
    console.log('Saga function')
}

export function* count() {
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
}