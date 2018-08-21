import React from 'react';
import {shallow} from 'enzyme';

import TopNav from "./top-nav";

describe("TopNav status", () =>{
	it("Renders TopNav status without crazhing",()=>{
		shallow(<TopNav />);
	});

});