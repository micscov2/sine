import app
import app_askubuntu
import stackoverflow
import unix_linux_app
import serverfault
import superuser

print("Running python cron...")
try:
	app.run_now()
	print("# Completed 1")
	app_askubuntu.run_now()
	print("# Completed 2")
	stackoverflow.run_now()
	print("# Completed 3")
	unix_linux_app.run_now()
	print("# Completed 4")
	serverfault.run_now()
	print("# Completed 5")
	superuser.run_now()
	print("# Completed 6")
except Exception as e:
	pass
	

