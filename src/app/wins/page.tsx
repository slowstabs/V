export default function WinsPage() {
    return (
        <main>
            <h1>Wins & Certificates</h1>
            <p>A track record of successful engagements and professional certifications.</p>

            <div style={{ marginTop: '2rem' }}>
                <h2 style={{ fontSize: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                    Certifications
                </h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <h3 style={{ margin: '0 0 0.2rem 0' }}>Offensive Security Certified Professional (OSCP)</h3>
                            <div style={{ opacity: 0.6, fontSize: '0.9rem' }}>OffSec</div>
                        </div>
                        <div style={{ opacity: 0.8 }}>2025</div>
                    </li>
                    <li style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <h3 style={{ margin: '0 0 0.2rem 0' }}>Certified Red Team Operator (CRTO)</h3>
                            <div style={{ opacity: 0.6, fontSize: '0.9rem' }}>Zero-Point Security</div>
                        </div>
                        <div style={{ opacity: 0.8 }}>2024</div>
                    </li>
                </ul>
            </div>

            <div style={{ marginTop: '3rem' }}>
                <h2 style={{ fontSize: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                    CTF Podium Finishes
                </h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <h3 style={{ margin: '0 0 0.2rem 0' }}>DEF CON Quals</h3>
                            <div style={{ opacity: 0.6, fontSize: '0.9rem' }}>Team: NoName</div>
                        </div>
                        <div style={{ background: 'var(--foreground)', color: 'var(--background)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                            1st Place
                        </div>
                    </li>
                    <li style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <h3 style={{ margin: '0 0 0.2rem 0' }}>Google CTF</h3>
                            <div style={{ opacity: 0.6, fontSize: '0.9rem' }}>Solo Category</div>
                        </div>
                        <div style={{ background: 'var(--foreground)', color: 'var(--background)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                            2nd Place
                        </div>
                    </li>
                </ul>
            </div>
        </main>
    );
}
