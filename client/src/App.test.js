import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Home from "./routes/home/Home";
import App from "./App";

configure({ adapter: new Adapter() });
describe('App', () => {
  let store
  const middlewares = []
  const mockStore = configureStore(middlewares);
  beforeEach(() => {
    store = mockStore([]);
  });

  it('El componente Home debe renderizar en la ruta /home (Sólo en la ruta "/home")', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/home']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.find(Home)).toHaveLength(1);
  });

});