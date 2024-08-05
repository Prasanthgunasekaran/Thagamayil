import React from 'react';
import './Data.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../component/assets/image/logo.png';
import { FaRegBell } from "react-icons/fa";
// import { IoIosSearch } from "react-icons/io";
import Profile from '../component/assets/image/Profile.png';
import Dashboard from '../component/assets/icons/Dashboard.svg';
import Gold from '../component/assets/icons/Gold.svg';
import Scheme from '../component/assets/icons/Scheme.svg';
import Customer from '../component/assets/icons/Customer.svg';
import Order from '../component/assets/icons/Order.svg';
import Receipt from '../component/assets/icons/Recepit.svg';
import Support from '../component/assets/icons/Support.svg';
import Content from '../component/assets/icons/Content.svg';
import Workflow from '../component/assets/icons/Workflow.svg';
import Reporting from '../component/assets/icons/Reporting.svg';
import System from '../component/assets/icons/SystemConf.svg';
import Referral from '../component/assets/icons/Referreal.svg';
import UserManage from '../component/assets/icons/UserManage.svg';
import Setting from '../component/assets/icons/Setting.svg';
import Register from '../component/assets/image/Register Customer.svg';
import SchemeCustomer from '../component/assets/image/Scheme.svg';
import CustomerActivity from '../component/assets/image/Customer with Activity.svg';
import CustomerWithout from '../component/assets/image/Customer without.svg';
import D30User from '../component/assets/image/D30User.svg';
import D30Customer from '../component/assets/image/D30Customer.svg';
import TableInput from '../component/assets/image/TablePInput.png';
// import Tabletabs from '../component/assets/image/Tabletabs.svg';
import GreenColor from '../component/assets/image/GeenIcon.svg';
import RedColor from '../component/assets/image/RedColor.svg';
import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";





function Data() {
    return (
        <div>
            <div className='headlog'>
                <div className='logo'>
                    <img src={Logo} alt='Logo' />
                </div>
                <div className='profile'>
                    <p><FaRegBell /></p>
                    <h6>John Deo</h6>
                    <div className='profileImg'>
                        <img src={Profile} alt='Profile' />
                    </div>
                </div>
            </div>

            {/* Slide Bar */}

            <div className='slideTitle1'>
                <div className='slideBar'>
                    <div className='box1'>
                        <div className='side'><img src={Dashboard} alt='Dashboard' />Dashboard</div>
                        <div className='side'><img src={Gold} alt='Gold' />Gold Rate Maintenance</div>
                        <div className='side'><img src={Scheme} alt='Scheme' />Scheme Management</div>
                        <div className='side Custom'><img src={Customer} alt='Customer' />Customer Management</div>
                        <div className='side'><img src={Order} alt='Order' />Order Management</div>
                        <div className='side'><img src={Receipt} alt='Recepit' />Receipt Reconciliation</div>
                        <div className='side'><img src={Support} alt='Support' />Support Management</div>
                        <div className='side'><img src={Content} alt='Content' />Content Management</div>
                        <div className='side'><img src={Workflow} alt='Workflow' />Workflow Management</div>
                        <div className='side'><img src={Reporting} alt='Reporting' />Reporting</div>
                        <div className='side'><img src={System} alt='System' />System Config settings</div>
                        <div className='side'><img src={Referral} alt='Referral' />Referral Management</div>
                        <div className='side'><img src={UserManage} alt='User' />User Management</div>
                        <div className='side'><img src={Setting} alt='Setting' />Settings</div>
                    </div>
                </div>
                <div className='slideTitle2' >
                    <h4>Customer Management</h4>
                    <div className='Registerbox'>
                        <div className='regbox1'>
                            <img src={Register} alt='Register' />
                        </div>
                        <div className='regbox2'>
                            <img src={SchemeCustomer} alt='Register' />
                        </div>
                        <div className='regbox3'>
                            <img src={CustomerActivity} alt='Register' />
                        </div>
                        <div className='regbox4'>
                            <img src={CustomerWithout} alt='Register' />
                        </div>
                        <div className='regbox5'>
                            <img src={D30User} alt='Register' />
                        </div>
                        <div className='regbox6'>
                            <img src={D30Customer} alt='Register' />
                        </div>
                    </div>

                    {/* Table */}
                    <div className='boxTable'>
                        <div className='tableBox'>
                            {/* <input type='text' placeholder='Search by Name' /> */}
                            <img src={TableInput} alt='TableInput' />
                            {/* <img src={Tabletabs} alt='TableInput' /> */}
                        </div>
                        <hr />
                        {/* <table class="table tableHead">
                            <thead >
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">CustomerID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Mobile No.</th>
                                    <th scope="col">E-Mail ID</th>
                                    <th scope="col">RegisterdDate</th>
                                    <th scope="col" className='activ'>No.of Scheme(Active)</th>
                                    <th scope="col">Weight</th>
                                    <th scope="col">Amount Saved</th>
                                    <th scope="col">Last paid date</th>
                                    <th scope="col">KYC</th>
                                    <th scope="col">Bank</th>
                                    <th scope="col">Nominee</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td >1</td>
                                    <td className='text-danger'>234234234</td>
                                    <td>Ring</td>
                                    <td >234234234</td>
                                    <td>example@gamil.com</td>
                                    <td>22/02/2022</td>
                                    <td>1</td>
                                    <td>20g</td>
                                    <td>&#8377;1,55,890</td>
                                    <td>22/02/2022</td>
                                </tr>
                                <tr >
                                    <td>2</td>
                                    <td className='text-danger'>234234234</td>
                                    <td>Ring</td>
                                    <td>234234234</td>
                                    <td>example@gamil.com</td>
                                    <td>22/02/2022</td>
                                    <td>1</td>
                                    <td>20g</td>
                                    <td>&#8377;1,55,890</td>
                                    <td>22/02/2022</td>
                                </tr>
                            </tbody>
                        </table> */}
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th >S.No</th>
                                    <th >CustomerID</th>
                                    <th >Name</th>
                                    <th >Mobile No.</th>
                                    <th >E-Mail ID</th>
                                    <th >RegisterdDate</th>
                                    <th className='wide-header'>No.of Scheme (Active)</th>
                                    <th >Weight</th>
                                    <th >Amount Saved</th>
                                    <th >Last paid date</th>
                                    <th >KYC</th>
                                    <th >Bank</th>
                                    <th >Nominee</th>
                                </tr>

                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>234234234</td>
                                    <td>Ring</td>
                                    <td>234234234</td>
                                    <td>example@gmail.com</td>
                                    <td>22/02/2022</td>
                                    <td className='Nums'>1</td>
                                    <td>20</td>
                                    <td>&#8377;1,55,890</td>
                                    <td>22/02/2022</td>
                                    <td><img src={GreenColor} alt='' /></td>
                                    <td><img src={GreenColor} alt='' /></td>
                                    <td><img src={GreenColor} alt='' /></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>234234234</td>
                                    <td>Kyle</td>
                                    <td>234234234</td>
                                    <td>example@gmail.com</td>
                                    <td>22/02/2022</td>
                                    <td className='Nums'>1</td>
                                    <td>20</td>
                                    <td>&#8377;1,55,890</td>
                                    <td>22/02/2022</td>
                                    <td><img src={RedColor} alt='' /></td>
                                    <td><img src={RedColor} alt='' /></td>
                                    <td><img src={RedColor} alt='' /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='Footer'>
                        <div className='footertitle'>
                            <div className='lefticon'><FaCaretLeft /></div>
                            <div className='btn1'>1</div>
                            <div className='btn2'>2</div>
                            <div className='btn2'>3</div>
                            <div className='btn2'>4</div>
                            <div className='btn2'>...</div>
                            <div className='btn2'>8</div>
                            <div className='lefticon'><FaCaretRight /></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Data