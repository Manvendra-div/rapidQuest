import { RxHamburgerMenu } from "react-icons/rx";
import { BarChart } from "keep-react";
const BarChartData = [
  {
    name: "2",
    price: 340,
    sell: 140,
  },
  {
    name: "4",
    price: 300,
    sell: 200,
  },
  {
    name: "6",
    price: 170,
    sell: 120,
  },
  {
    name: "8",
    price: 190,
    sell: 130,
  },
  {
    name: "10",
    price: 450,
    sell: 120,
  },
];
const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200 flex">
      <div className="flex flex-col justify-center items-center p-2">
        <div className="self-start hero-content flex-row">
          <div className="avatar">
            <div className="w-20 lg:w-24 rounded-full shadow-lg">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div>
            <h1 className="text-xl lg:text-3xl font-semibold">Hi,Mike</h1>
            <p className="py-2">welcome back</p>
          </div>
        </div>
        <div className="stats stats-vertical mt-8 p-3 w-full">
          <span className="font-semibold">Today</span>
          <div className="stat">
            <p className="stat-value text-4xl">$19,892</p>
            <p className="stat-desc">Account Balance</p>
          </div>
          <div className="stat">
            <p className="stat-value text-3xl">$4,000</p>
            <p className="stat-desc">Year to date Contributions</p>
          </div>
          <div className="stat">
            <p className="stat-value text-2xl">$1,892</p>
            <p className="stat-desc">Total Interest</p>
          </div>
        </div>
        <details className="dropdown self-start mt-3">
          <summary className="m-1 btn btn-primary">I want to </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-auto">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </details>
        <div className="stats stats-vertical mt-8 p-3">
          <span className="font-semibold stat-title">Recent Transactions</span>
          <div className="stat">
            <div className="stat-title">2020-08-07</div>
            <p className="stat-value text-lg">
              Withdrawal Transfer to Bank-XXX11
            </p>
          </div>
          <div className="stat">
            <div className="stat-title">2020-08-07</div>
            <p className="stat-value text-lg">
              Withdrawal Transfer to Bank-XXX11
            </p>
          </div>
          <div className="stat">
            <div className="stat-title">2020-08-07</div>
            <p className="stat-value text-lg">
              Withdrawal Transfer to Bank-XXX11
            </p>
          </div>
        </div>
        <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden">
          <RxHamburgerMenu size={30} />
        </label>
      </div>
      <div className="flex flex-col justify-between items-start p-5 h-full">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title text-secondary">Retirement Income</div>
            <div className="stat-value">Starting Year 2056</div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat place-items-center">
            <div className="stat-value">$300,000</div>
            <div className="stat-desc">My Goal</div>
          </div>
          <div className="stat place-items-center">
            <div className="stat-value text-secondary">59%</div>
            <div className="stat-desc text-secondary">Goal Achived</div>
          </div>
          <div className="stat place-items-center">
            <div className="stat-value">300$</div>
            <div className="stat-desc">Est. Monthly Encome</div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title font-semibold">
              Contributions Overtime
            </div>
            <BarChart
              height={250}
              width={500}
              barSize={30}
              barRadius={[4, 4, 0, 0]}
              dataKey="price"
              secondaryDataKey="sell"
              chartData={BarChartData}
              showBg={true}
              showLegend={true}
              showTooltip={true}
              showXaxis={true}
              showYaxis={true}
            />
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title font-semibold">
              How do i compare my peers?
            </div>
            <div className="stat-desc">
              These numbers represent current goal achievement
            </div>
            <div className="flex">
              <div className="flex flex-col">
                <span className="flex items-center mt-3">
                  <p className="font-semibold m-1">Age</p>
                  <details className="dropdown">
                    <summary className="m-1 font-medium text-xs">Under 30</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                      <li>
                        <a>Item 1</a>
                      </li>
                      <li>
                        <a>Item 2</a>
                      </li>
                    </ul>
                  </details>
                </span>
                <span className="flex items-center mt-1">
                  <p className="font-semibold m-1">Salary</p>
                  <details className="dropdown">
                    <summary className="m-1 font-medium text-xs">K 20 - K 30</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                      <li>
                        <a>Item 1</a>
                      </li>
                      <li>
                        <a>Item 2</a>
                      </li>
                    </ul>
                  </details>
                </span>
                <span className="flex items-center mt-1">
                  <p className="font-semibold m-1">Gender</p>
                  <details className="dropdown">
                    <summary className="m-1 font-medium text-xs">Male</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                      <li>
                        <a>Item 1</a>
                      </li>
                      <li>
                        <a>Item 2</a>
                      </li>
                    </ul>
                  </details>
                </span>
              </div>
              <div className="flex">
                <div
                  className="radial-progress text-primary m-3"
                  style={{ "--value": "70", "--size": "8rem" }}
                  role="progressbar"
                >
                  70%
                </div>
                <div
                  className="radial-progress text-primary m-3"
                  style={{ "--value": "70", "--size": "8rem" }}
                  role="progressbar"
                >
                  70%
                </div>
                <div
                  className="radial-progress text-primary m-3"
                  style={{ "--value": "70", "--size": "8rem" }}
                  role="progressbar"
                >
                  70%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
