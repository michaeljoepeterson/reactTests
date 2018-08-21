import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from "./guess-count";

describe("GuessCount status", () =>{
	it("Renders GuessCount status without crazhing",()=>{
		shallow(<GuessCount />);
	});

});