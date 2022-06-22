// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import SizesLayout from 'src/layouts/SizesLayout'
import MachinesLayout from 'src/layouts/MachinesLayout'
import ProductsLayout from 'src/layouts/ProductsLayout'
import MmpsLayout from 'src/layouts/MmpsLayout'
import MaterialsLayout from 'src/layouts/MaterialsLayout'
import ColorsLayout from 'src/layouts/ColorsLayout'
import GalleryLayout from './layouts/GalleryLayout/GalleryLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={SizesLayout}>
        <Route path="/sizes/new" page={SizeNewSizePage} name="newSize" />
        <Route path="/sizes/{id:Int}/edit" page={SizeEditSizePage} name="editSize" />
        <Route path="/sizes/{id:Int}" page={SizeSizePage} name="size" />
        <Route path="/sizes" page={SizeSizesPage} name="sizes" />
      </Set>
      <Set wrap={MachinesLayout}>
        <Route path="/machines/new" page={MachineNewMachinePage} name="newMachine" />
        <Route path="/machines/{id:Int}/edit" page={MachineEditMachinePage} name="editMachine" />
        <Route path="/machines/{id:Int}" page={MachineMachinePage} name="machine" />
        <Route path="/machines" page={MachineMachinesPage} name="machines" />
      </Set>
      <Set wrap={ProductsLayout}>
        <Route path="/products/new" page={ProductNewProductPage} name="newProduct" />
        <Route path="/products/{id:Int}/edit" page={ProductEditProductPage} name="editProduct" />
        <Route path="/products/{id:Int}" page={ProductProductPage} name="product" />
        <Route path="/products" page={ProductProductsPage} name="products" />
      </Set>
      <Set wrap={MmpsLayout}>
        <Route path="/mmps/new" page={MmpNewMmpPage} name="newMmp" />
        <Route path="/mmps/{id:Int}/edit" page={MmpEditMmpPage} name="editMmp" />
        <Route path="/mmps/{id:Int}" page={MmpMmpPage} name="mmp" />
        <Route path="/mmps" page={MmpMmpsPage} name="mmps" />
      </Set>
      <Set wrap={MaterialsLayout}>
        <Route path="/materials/new" page={MaterialNewMaterialPage} name="newMaterial" />
        <Route path="/materials/{id:Int}/edit" page={MaterialEditMaterialPage} name="editMaterial" />
        <Route path="/materials/{id:Int}" page={MaterialMaterialPage} name="material" />
        <Route path="/materials" page={MaterialMaterialsPage} name="materials" />
      </Set>
      <Set wrap={ColorsLayout}>
        <Route path="/colors/new" page={ColorNewColorPage} name="newColor" />
        <Route path="/colors/{id:Int}/edit" page={ColorEditColorPage} name="editColor" />
        <Route path="/colors/{id:Int}" page={ColorColorPage} name="color" />
        <Route path="/colors" page={ColorColorsPage} name="colors" />
      </Set>
      <Set wrap={GalleryLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
