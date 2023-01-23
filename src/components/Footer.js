import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container-fluid">
            <div className="row text-muted">
                <div className="col-6 text-start">
                    <p className="mb-0">
                        <a className="text-muted" href="#" target="_blank"><strong>ICA Specs Ltd.</strong></a> &copy; 2023
                    </p>
                </div>
                <div className="col-6 text-end">
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a className="text-muted" href="#" target="_blank">Support</a>
                        </li>
                        <li className="list-inline-item">
                            <a className="text-muted" href="#" target="_blank">Help Center</a>
                        </li>
                        <li className="list-inline-item">
                            <a className="text-muted" href="#" target="_blank">Privacy</a>
                        </li>
                        <li className="list-inline-item">
                            <a className="text-muted" href="#" target="_blank">Terms</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
