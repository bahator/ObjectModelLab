import expect from 'expect';
import {
    ExceptionUser,
    Sensor,
    Temperature,
    Humidity,
    Light,
    Switch,
    Door,
    Fan_speed,
    Data,
    TimeSerie,
    Datum,
} from '../../src/model';
import  { data }  from './sensors_data'
describe('Sensor model tests', () => {
    it('Ne devrais pas marcher', () => {
        expect(() => new Sensor(data[3].id, data[3].name, data[3].type, data[3].data)).toThrow("Données Incorrectes");
    });
    describe('TimeSerie', () => {
        it('Moyenne avec données incorrectes', () => {
            var s= new Sensor(data[4].id, data[4].name, data[4].type, data[4].data);
            expect(() => s.getData().Moyenne()).toThrow("Données Incorrectes");
        });
        it('TotalTime avec données incorrectes', () => {
            var s= new Sensor(data[5].id, data[5].name, data[5].type, data[5].data);
            expect(() => s.getData().TotalTime()).toThrow("Données Incorrectes");
        });
        it('Moyenne', () => {
            var s= new Sensor(data[2].id, data[2].name, data[2].type, data[2].data);
            expect(s.getData().Moyenne() == 1774.5).toBe(true);
        });
        it('TotalTime', () => {
            var s= new Sensor(data[0].id, data[0].name, data[0].type, data[0].data);
            expect(s.getData().TotalTime() == 28800000).toBe(true);
        });
        it('ValueparSeconde', () => {
            var s= new Sensor(data[2].id, data[2].name, data[2].type, data[2].data);
            expect(s.getData().ValueparSeconde() == 7.098).toBe(true);
        });
    });
});