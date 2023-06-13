// Import deps
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AddBusinessSharp } from '@mui/icons-material'

// Create Bookshelf component
export default function Submission({hidden, onButtonClick})  {
  // Prepare states

  // 'plot_use': req.body.plot_use,
  // 'year': req.body.year,
  // 'pkt_no': req.body.pkt_no,
  // 'scinamepkt': req.body.scinamepkt,
  // 'substrat': req.body.substrat,
  // 'abun': req.body.abun,
  // 'chemtest': req.body.chemtest,
  // 'spnotes': req.body.spnotes

  const [plot_use, setPlotUse] = useState('')
  const [year, setYear] = useState('')
  const [pkt_no, setPktNo] = useState('')
  const [scinamepkt, setScinamepkt] = useState('')
  const [substrat, setSubstrat] = useState('')
  const [abun, setAbun] = useState([])
  const [chemtest, setChemtest] = useState([])
  const [spnotes, setSpnotes] = useState([])
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    // Send GET request to 'books/all' endpoint
    axios
      .get('http://localhost:4001/data/all')
      .then(response => {
        // Update the books state
        setData(response.data)

        // Update loading state
        setLoading(false)
      })
      .catch(error => console.error(`There was an error retrieving the book list: ${error}`))
  }


  // Reset all input fields
  const handleInputsReset = () => {
    setPlotUse('')
    setYear('')
    setPktNo('')
    setScinamepkt('')
    setAbun('')
    setChemtest('')
    setSpnotes('')
  }

  // Create new book
  const handleEntryCreate = () => {
    // Send POST request to 'books/create' endpoint
    axios
      .post('http://localhost:4001/data/create', {
        plot_use: plot_use,
        year: year,
        pkt_no: pkt_no,
        scinamepkt: scinamepkt,
        substrat: substrat,
        abun: abun,
        chemtest: chemtest,
        spnotes: spnotes
      })
      .catch(error => console.error(`There was an error creating the ${plot_use} book: ${year}`))
  }

  // Submit new book
  const handleEntrySubmit = () => {
    // Check if all fields are filled
    if (plot_use.length > 0 && year.length > 0 && pkt_no.length > 0 && scinamepkt.length > 0 && substrat.length > 0 && abun.length > 0 && chemtest.length > 0 && spnotes.length > 0) {
      // Create new book
      handleEntryCreate()

      console.info(`Data Entry ${plot_use} on ${year} added.`)

      // Reset all input fields
      handleInputsReset()
    }
  }


      // 'plot_use': req.body.plot_use,
  // 'year': req.body.year,
  // 'pkt_no': req.body.pkt_no,
  // 'scinamepkt': req.body.scinamepkt,
  // 'substrat': req.body.substrat,
  // 'abun': req.body.abun,
  // 'chemtest': req.body.chemtest,
  // 'spnotes': req.body.spnotes
  return (
    <div className="book-list-wrapper" hidden={hidden}>
      {/* Form for creating new book */}
      <div className="book-list-form">
        <div className="form-wrapper" onSubmit={handleEntrySubmit}>
          <div className="form-row">
            <fieldset>
              <label className="form-label" htmlFor="title">Enter Plot No.:</label>
              <input className="form-input" type="text" id="title" name="title" value={plot_use} onChange={(e) => setPlotUse(e.currentTarget.value)} />
            </fieldset>

            <fieldset>
              <label className="form-label" htmlFor="author">Enter Year:</label>
              <input className="form-input" type="text" id="author" name="author" value={year} onChange={(e) => setYear(e.currentTarget.value)} />
            </fieldset>
          </div>
          <div className="form-row">
            <fieldset>
              <label className="form-label" htmlFor="pubDate">Enter Packet No.:</label>
              <input className="form-input" type="text" id="pubDate" name="pubDate" value={pkt_no} onChange={(e) => setPktNo(e.currentTarget.value)} />
            </fieldset>

            <fieldset>
              <label className="form-label" htmlFor="rating">Enter Species:</label>
              <input className="form-input" type="text" id="rating" name="rating" value={scinamepkt} onChange={(e) => setScinamepkt(e.currentTarget.value)} />
            </fieldset>
          </div>
          <div className="form-row">
            <fieldset>
              <label className="form-label" htmlFor="pubDate">Enter Substrate:</label>
              <input className="form-input" type="text" id="pubDate" name="pubDate" value={substrat} onChange={(e) => setSubstrat(e.currentTarget.value)} />
            </fieldset>

            <fieldset>
              <label className="form-label" htmlFor="rating">Enter Abundance:</label>
              <input className="form-input" type="text" id="rating" name="rating" value={abun} onChange={(e) => setAbun(e.currentTarget.value)} />
            </fieldset>
          </div>

          <div className="form-row">
            <fieldset>
              <label className="form-label" htmlFor="pubDate">Enter Chemistry:</label>
              <input className="form-input" type="text" id="pubDate" name="pubDate" value={chemtest} onChange={(e) => setChemtest(e.currentTarget.value)} />
            </fieldset>

            <fieldset>
              <label className="form-label" htmlFor="rating">Enter Remarks:</label>
              <input className="form-input" type="text" id="rating" name="rating" value={spnotes} onChange={(e) => setSpnotes(e.currentTarget.value)} />
            </fieldset>
          </div>
        </div>
        

        <button onClick={handleEntrySubmit} className="btn btn-add">Submit Data Entry</button>
      </div>
    </div>
  )
}