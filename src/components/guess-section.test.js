import React from 'react';
import {shallow} from 'enzyme';

import GuessSection from "./guess-section";

describe("GuessSection status", () =>{
	it("Renders GuessSection status without crashing",()=>{
		shallow(<GuessSection />);
	});

});