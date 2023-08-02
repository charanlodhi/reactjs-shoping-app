import { render } from '@testing-library/react';
import { act, screen } from 'react-dom/test-utils';
import List from './Components/List';
      global.fetch = jest.fn(() =>
      Promise.resolve({
        json:()=>
        Promise.resolve({
          title:"New Year’s Day"
        }),
      })
      );
      describe("API Testing", ()=>{
        it("Load api", async () =>{
          act(async () => render(<List />));
          expect(screen.getByAltText("Good Friday")).toBeInTheDocument();
        });
      });
