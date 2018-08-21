import React from 'react';
import {shallow} from 'enzyme';

import GuessList from "./guess-list";

describe("GuessList status", () =>{
	it("Renders GuessList status without crazhing",()=>{
		shallow(<GuessList guesses={[]}/>);
	});

});