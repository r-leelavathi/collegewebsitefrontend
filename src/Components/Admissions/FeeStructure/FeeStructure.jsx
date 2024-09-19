import React from 'react';
import './FeeStructure.css'; // Ensure to create this CSS file for custom styles

const FeeStructure = () => {
  return (
    <div className="fee-structure-page">
      <h2 className="fee-structure-title">Fee Structure for Diploma Courses</h2>
      <p className="fee-structure-description">
        Fee structure for the diploma courses in Government & Aided polytechnics in the state is mentioned below as per the Government orders No. ED 119 TPE 05, dt: 18/10/2005, G.O. No. ED 10 TPE 2012, Dated: 29-05-2012, and G.O. No. ED 64 TPE 2016, Dated: 21-06-2016.
      </p>

      <table className="fee-structure-table">
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Polytechnic</th>
            <th>Tuition Fee</th>
            <th>Development Fee</th>
            <th>Other Fee</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Government Polytechnic</td>
            <td>2,940/-</td>
            <td>500/-</td>
            <td>830/-</td>
            <td>4,270/-</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Aided Polytechnic</td>
            <td>5,618/-</td>
            <td>500/-</td>
            <td>830/-</td>
            <td>6,948/-</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Private Polytechnic</td>
            <td>Karnataka students: 12,075/-</td>
            <td>500/-</td>
            <td>830/-</td>
            <td>13,405/-</td>
          </tr>
          <tr>
            <td></td>
            <td>Non-Karnataka</td>
            <td>19,425/-</td>
            <td>500/-</td>
            <td>830/-</td>
            <td>20,755/-</td>
          </tr>
        </tbody>
      </table>

      <p className="fee-structure-note">
        * In addition to the above fee, candidates have to pay Rs.40/- towards NSS (Polytechnics where NSS unit exists).
        <br />
        ** In addition to the above fee, candidates have to pay Rs.50/- towards NSS (Polytechnics where NSS unit does not exist).
      </p>

      <h3 className="fee-category-title">Fee Structure Based on Category</h3>
      <table className="fee-category-table">
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Category Claimed by the Candidate</th>
            <th>Income Limit</th>
            <th>Govt. Polytechnic</th>
            <th>Aided Polytechnic (Aided Courses)</th>
            <th>Pvt/Aided Polytechnic (Un-Aided Courses)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>General</td>
            <td>------</td>
            <td>4,270/-</td>
            <td>6,948/-</td>
            <td>13,405/-</td>
          </tr>
          <tr>
            <td>2</td>
            <td>SC/ST</td>
            <td>2.50 Lakhs</td>
            <td>430/-</td>
            <td>430/-</td>
            <td>-----</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>2.50 to 10.00 Lakhs</td>
            <td>2,535/-</td>
            <td>3,874/-</td>
            <td>-----</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Cat-1</td>
            <td>2.50 Lakhs</td>
            <td>960/-</td>
            <td>3,638/-</td>
            <td>-----</td>
          </tr>
          <tr>
            <td>4</td>
            <td>2A/3A/3B</td>
            <td>1.00 Lakhs</td>
            <td>960/-</td>
            <td>3,638/-</td>
            <td>-----</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Cat-2A, Cat-2B, Cat-3B</td>
            <td>-----</td>
            <td>4,270/-</td>
            <td>6,948/-</td>
            <td>13,405/-</td>
          </tr>
          <tr>
            <td>6</td>
            <td>SNQ</td>
            <td>6.00 Lakhs</td>
            <td>1,330/-</td>
            <td>1,330/-</td>
            <td>1,330/-</td>
          </tr>
        </tbody>
      </table>

      <p className="fee-structure-note">
        * The Candidates have to pay Rs. 40/- towards NSS in institutes where an Additional Self-financed NSS unit exists.
        <br />
        ** The Candidates have to pay Rs. 50/- towards NSS in institutes where a Self-financed NSS unit does not exist.
      </p>

      <h3 className="fee-category-title">Fee Structure </h3>
      <table className="fee-category-table">
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Description</th>
            <th>Govt. Seat</th>
            <th>SNQ Seat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Admission Fee</td>
            <td>30/-</td>
            <td>30/-</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Tutuion Fee</td>
            <td>2940/-</td>
            <td>-----</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Sports Fee</td>
            <td>70/-</td>
            <td>70/-</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Reading Fee</td>
            <td>100/-</td>
            <td>100/-</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Association Fee</td>
            <td>60/-</td>
            <td>60/-</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Magzine</td>
            <td>60/-</td>
            <td>60/-</td>
          </tr>

          <tr>
            <td>7</td>
            <td>Library Deposit</td>
            <td>150/-</td>
            <td>150/-</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Laboratory Fee</td>
            <td>300/-</td>
            <td>300/-</td>
          </tr>
          <tr>
            <td>9</td>
            <td>ID Card Fee</td>
            <td>10/-</td>
            <td>10/-</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Student Welfare Fee</td>
            <td>25/-</td>
            <td>25/-</td>
          </tr>
          <tr>
            <td>11</td>
            <td>Teachers Welfare Fund</td>
            <td>25/-</td>
            <td>25/-</td>
          </tr>
          <tr>
            <td>12</td>
            <td>Development Fee</td>
            <td>500/-</td>
            <td>500/-</td>
          </tr>
          <tr>
            <td>13</td>
            <td>Total</td>
            <td>4270/-</td>
            <td>1330/-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FeeStructure;
