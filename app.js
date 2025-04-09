document.body.classList.add('light-theme');

function toggleTheme() {
  document.body.classList.toggle('light-theme');
  document.body.classList.toggle('dark-theme');

  const icon = document.getElementById("themeIcon");
  if (document.body.classList.contains('dark-theme')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}

  
    function appendValue(value) {
      document.getElementById("result").value += value;
    }

    function clearResult() {
      document.getElementById("result").value = '';
    }

    function calculate() {
      try {
        document.getElementById("result").value = eval(document.getElementById("result").value);
      } catch {
        document.getElementById("result").value = "Error";
      }
    }