// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import MMPSLayout from 'src/layouts/MMPSLayout'
import ColorsLayout from 'src/layouts/ColorsLayout'
import MaterialsLayout from 'src/layouts/MaterialsLayout'
import MachinesLayout from 'src/layouts/MachinesLayout'
import GalleryLayout from './layouts/GalleryLayout/GalleryLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={MMPSLayout}>
        <Route path="/mmps/new" page={MMPNewMMPPage} name="newMMP" />
        <Route path="/mmps/{id:Int}/edit" page={MMPEditMMPPage} name="editMMP" />
        <Route path="/mmps/{id:Int}" page={MMPMMPPage} name="mmp" />
        <Route path="/mmps" page={MMPMMPSPage} name="mmps" />
      </Set>
      <Set wrap={ColorsLayout}>
        <Route path="/colors/new" page={ColorNewColorPage} name="newColor" />
        <Route path="/colors/{id:Int}/edit" page={ColorEditColorPage} name="editColor" />
        <Route path="/colors/{id:Int}" page={ColorColorPage} name="color" />
        <Route path="/colors" page={ColorColorsPage} name="colors" />
      </Set>
      <Set wrap={MaterialsLayout}>
        <Route path="/materials/new" page={MaterialNewMaterialPage} name="newMaterial" />
        <Route path="/materials/{id:Int}/edit" page={MaterialEditMaterialPage} name="editMaterial" />
        <Route path="/materials/{id:Int}" page={MaterialMaterialPage} name="material" />
        <Route path="/materials" page={MaterialMaterialsPage} name="materials" />
      </Set>
      <Set wrap={MachinesLayout}>
        <Route path="/machines/new" page={MachineNewMachinePage} name="newMachine" />
        <Route path="/machines/{id:Int}/edit" page={MachineEditMachinePage} name="editMachine" />
        <Route path="/machines/{id:Int}" page={MachineMachinePage} name="machine" />
        <Route path="/machines" page={MachineMachinesPage} name="machines" />
      </Set>
      <Set wrap={GalleryLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
