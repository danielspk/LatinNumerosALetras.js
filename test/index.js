import test from 'tape';
import latinNumerosALetras from '../build';

test('test results', (t) => {
  t.same(latinNumerosALetras(0), 'Cero Pesos');
  t.same(latinNumerosALetras(0.1), 'Cero Pesos con Diez centavos');
  t.same(latinNumerosALetras(0.01), 'Cero Pesos con Un centavo');
  t.same(latinNumerosALetras(1), 'Un Peso');
  t.same(latinNumerosALetras(1.25), 'Un Peso con Veinticinco centavos');
  t.same(latinNumerosALetras(5), 'Cinco Pesos');
  t.same(latinNumerosALetras(5.5), 'Cinco Pesos con Cincuenta centavos');
  t.same(latinNumerosALetras(10), 'Diez Pesos');
  t.same(latinNumerosALetras(10.35), 'Diez Pesos con Treinta y Cinco centavos');
  t.same(latinNumerosALetras(10.04), 'Diez Pesos con Cuatro centavos');
  t.same(latinNumerosALetras(100), 'Cien Pesos');
  t.same(latinNumerosALetras(100.99), 'Cien Pesos con Noventa y Nueve centavos');
  t.same(latinNumerosALetras(1000), 'Un Mil Pesos');
  t.same(latinNumerosALetras(1000.01), 'Un Mil Pesos con Un centavo');
  t.same(latinNumerosALetras(10000), 'Diez Mil Pesos');
  t.same(latinNumerosALetras(10000.00), 'Diez Mil Pesos');
  t.same(latinNumerosALetras(100000), 'Cien Mil Pesos');
  t.same(latinNumerosALetras(100000.11), 'Cien Mil Pesos con Once centavos');
  t.same(latinNumerosALetras(1000000), 'Un Millón de Pesos');
  t.same(latinNumerosALetras(1000000.66), 'Un Millón de Pesos con Sesenta y Seis centavos');
  t.same(latinNumerosALetras(1247639.81), 'Un Millón de Doscientos Cuarenta y Siete Mil Seiscientos Treinta y Nueve Pesos con Ochenta y Un centavos');
  t.end();
})
