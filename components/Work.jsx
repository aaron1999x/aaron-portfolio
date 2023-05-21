import React from 'react'

const Work = ({experience}) => {
  return (
    <div className="mb-8">
      <div className="grid gap-6">
        {experience.map((job, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">{job.position}</h3>
            <p className="text-sm text-gray-600 mb-2">{job.company}</p>
            <p className="text-sm text-gray-600 mb-4">{job.duration}</p>
            <p className="text-gray-800">{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Work