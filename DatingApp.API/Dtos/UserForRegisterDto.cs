using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(128, MinimumLength = 6, ErrorMessage = "You must specify a password between 6 and 30 characters!")]
        public string Password { get; set; }
    }
}