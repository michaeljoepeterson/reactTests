import React from 'react';
import {shallow} from 'enzyme';

import GuessForm from "./guess-form";

describe("GuessForm status", () =>{
	it("Renders GuessForm status without crazhing",()=>{
		shallow(<GuessForm />);
	});

});