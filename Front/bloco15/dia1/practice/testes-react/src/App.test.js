import { render, screen } from '@testing-library/react';
import App from './App';

test('Verificando se existe um botão', () => {
  const { getAllByRole } = render(<App />);
  const btns = getAllByRole('button');
  expect(btns.length).toBe(2);
})

test('Verificando se existe um botão de enviar', () => {
  const { getByTestId } = render(<App />);
  const btn = getByTestId('id-send');
  expect(btn).toBeInTheDocument();
  expect(btn.type).toBe('button');
  expect(btn).toHaveValue('Enviar')
})
